import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const N8N_WEBHOOK_URL = 'https://n8n.pd.oscarcloud.com.br/webhook-test/processos-digitais-chat';

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, mediaContent, mediaType, fileName, userInfo } = await req.json();

    console.log('Recebida mensagem:', { message, mediaType, fileName, userInfo });

    // Prepara payload para o N8N
    const payload: any = {
      message: message,
      timestamp: new Date().toISOString(),
      user: {
        name: userInfo?.name || 'Usuário Anônimo',
        department: userInfo?.department || 'Não informado',
        role: userInfo?.role || 'guest',
        email: userInfo?.email || 'Não informado'
      }
    };

    // Adiciona mídia se existir
    if (mediaContent) {
      payload.media = {
        type: mediaType,
        fileName: fileName,
        content: mediaContent
      };
    }

    console.log('Enviando para N8N webhook...');

    // Envia para o webhook N8N com timeout de 60 segundos
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 60000);

    const response = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error('Erro do webhook N8N:', response.status, response.statusText);
      throw new Error(`Webhook N8N retornou erro: ${response.status}`);
    }

    // Processa resposta do N8N
    const n8nResponse = await response.json();
    console.log('Resposta do N8N:', n8nResponse);

    // Retorna a resposta do N8N para o frontend
    return new Response(
      JSON.stringify({
        success: true,
        response: n8nResponse.response || n8nResponse.message || 'Resposta recebida com sucesso',
        data: n8nResponse
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Erro no agente-ia-oscar:', error);

    // Trata timeout
    if (error.name === 'AbortError') {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'timeout',
          message: 'O servidor demorou muito para responder. Tente novamente.'
        }),
        {
          status: 504,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Outros erros
    return new Response(
      JSON.stringify({
        success: false,
        error: 'internal_error',
        message: error instanceof Error ? error.message : 'Erro ao processar sua mensagem'
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
