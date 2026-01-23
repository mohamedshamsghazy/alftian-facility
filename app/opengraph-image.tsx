import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Alftian Facility & Bau GmbH'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #002A26, #001512)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Decor */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(212, 175, 55, 0.15) 2%, transparent 0%), radial-gradient(circle at 75px 75px, rgba(212, 175, 55, 0.15) 2%, transparent 0%)',
                        backgroundSize: '100px 100px',
                    }}
                />

                {/* Gold Circle Glow */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        height: '600px',
                        background: 'rgba(212, 175, 55, 0.1)',
                        borderRadius: '50%',
                        filter: 'blur(80px)',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
                    {/* We can't easily load external images in Edge functions without fetching, 
              so we'll use a CSS/Text logo representation or try to fetch if local.
              For reliability, let's use a beautiful Typography layout. */}

                    <div
                        style={{
                            fontSize: 80,
                            fontWeight: 900,
                            color: 'white',
                            marginBottom: 20,
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '-0.05em',
                        }}
                    >
                        ALFTIAN
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#D4AF37', // Gold
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontWeight: 600,
                        }}
                    >
                        Facility & Bau GmbH
                    </div>

                    <div
                        style={{
                            marginTop: 60,
                            padding: '10px 30px',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            borderRadius: '50px',
                            border: '1px solid rgba(212, 175, 55, 0.3)',
                            color: 'rgba(255,255,255,0.8)',
                            fontSize: 24,
                        }}
                    >
                        alftian-bau.com
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
