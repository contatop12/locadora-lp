import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { name, whatsapp, source, timestamp } = data

    // Validação básica
    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: "Nome e WhatsApp são obrigatórios" },
        { status: 400 }
      )
    }

    // Aqui você integraria com seu sistema de automação (N8N, webhook, etc.)
    // Por exemplo, enviando para um webhook do N8N:
    //
    // const webhookUrl = process.env.N8N_WEBHOOK_URL
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       name,
    //       whatsapp,
    //       source,
    //       timestamp,
    //       // Dados adicionais que você quiser enviar
    //     }),
    //   })
    // }

    // Log para verificação (remover em produção)
    console.log("Lead recebido:", {
      name,
      whatsapp,
      source,
      timestamp,
    })

    return NextResponse.json({
      success: true,
      message: "Lead capturado com sucesso",
    })
  } catch (error) {
    console.error("Erro ao processar lead:", error)
    return NextResponse.json(
      { error: "Erro ao processar solicitação" },
      { status: 500 }
    )
  }
}
