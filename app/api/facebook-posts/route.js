import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Konfiguracja Facebook Graph API
    const PAGE_ID = process.env.FACEBOOK_PAGE_ID; // Twoje Page ID
    const ACCESS_TOKEN = process.env.FACEBOOK_ACCESS_TOKEN; // Twój Access Token

    if (!PAGE_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        {
          error:
            "Facebook API nie jest skonfigurowane. Sprawdź zmienne środowiskowe.",
        },
        { status: 500 }
      );
    }

    // Pobieranie postów z Facebook Graph API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PAGE_ID}/posts?fields=id,message,created_time,permalink_url,likes.summary(true),comments.summary(true)&limit=6&access_token=${ACCESS_TOKEN}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Facebook API error: ${response.status}`);
    }

    const data = await response.json();

    // Formatowanie danych
    const formattedPosts =
      data.data?.map((post) => ({
        id: post.id,
        message: post.message || "Post bez treści tekstowej",
        created_time: post.created_time,
        permalink_url: post.permalink_url,
        likes: post.likes?.summary?.total_count || 0,
        comments: post.comments?.summary?.total_count || 0,
      })) || [];

    return NextResponse.json({
      posts: formattedPosts,
      success: true,
    });
  } catch (error) {
    console.error("Facebook API Error:", error);

    // Fallback - zwracamy przykładowe dane
    const fallbackPosts = [
      {
        id: "fallback_1",
        message:
          "Zapraszamy na konsultacje z zakresu integracji sensorycznej. Nasi specjaliści pomogą Wašemu dziecku! 🌟",
        created_time: new Date(
          Date.now() - 2 * 24 * 60 * 60 * 1000
        ).toISOString(),
        permalink_url:
          "https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/",
        likes: 25,
        comments: 3,
      },
      {
        id: "fallback_2",
        message:
          "Trening metodą Warnkego - skuteczna pomoc dla dzieci z dysleksją i trudnościami w nauce. Zapisz się na konsultację! 📚",
        created_time: new Date(
          Date.now() - 5 * 24 * 60 * 60 * 1000
        ).toISOString(),
        permalink_url:
          "https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/",
        likes: 32,
        comments: 7,
      },
      {
        id: "fallback_3",
        message:
          "Nowy gabinet terapeutyczny już otwarty! Zapraszamy do odwiedzin i zapoznania się z naszą ofertą 🏥",
        created_time: new Date(
          Date.now() - 7 * 24 * 60 * 60 * 1000
        ).toISOString(),
        permalink_url:
          "https://www.facebook.com/p/Sensus-Centrum-Terapii-i-Wspomagania-Rozwoju-Dziecka-61576806726313/",
        likes: 18,
        comments: 2,
      },
    ];

    return NextResponse.json({
      posts: fallbackPosts,
      success: false,
      error: "Używane są przykładowe dane - skonfiguruj Facebook API",
    });
  }
}
