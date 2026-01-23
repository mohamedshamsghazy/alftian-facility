export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "GeneralContractor",
        "name": "Alftian Facility & Bau GmbH",
        "image": "https://alftian-bau.com/images/fulllogo-transparent.png",
        "@id": "https://alftian-bau.com",
        "url": "https://alftian-bau.com",
        "telephone": "0345 47009014",
        "email": "info@alftian-bau.com",
        "vatID": "DE459485701",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "König-Heinrich-Straße 6",
            "addressLocality": "Merseburg",
            "postalCode": "06217",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.3547,
            "longitude": 11.9996
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "17:00"
        },
        "sameAs": [
            "https://www.facebook.com/profile.php?id=61586739460931"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
