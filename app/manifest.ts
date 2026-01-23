import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Alftian Facility & Bau GmbH',
        short_name: 'Alftian Bau',
        description: 'Premier Construction & Facility Management Services in Merseburg, Germany.',
        start_url: '/',
        display: 'standalone',
        background_color: '#002A26',
        theme_color: '#002A26',
        icons: [
            {
                src: '/images/fulllogo-transparent.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
