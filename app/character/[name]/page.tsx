import Image from "next/image";

export default async function CharacterPage({ params }) {

    const { name } = await params

    const SUPERHERO_API_KEY = process.env.SUPERHERO_API_KEY
    const res = await fetch(`https://superheroapi.com/api/${SUPERHERO_API_KEY}/search/${name}`)
    const data = await res.json()

    console.log(data)

    if (!data.results){
        return <div>Character not found</div>
    }

    const character = data.results[0];

    return (
        <main>
            {/* Character Header */}
            <div>
                <Image
                    src={character.image.url}
                    alt={character.name}
                    width={200}
                    height={200}
                />
                <div>
                    <h1>{character.name}</h1>
                    <p>{character.biography['full-name']}</p>
                    <p>{character.biography.publisher}</p>
                    <p>{character.biography.alignment}</p>
                </div>
            </div>
        </main>
    )
}