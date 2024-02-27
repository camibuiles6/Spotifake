//consumiendo apis con JS

// 1. el primer paso es pa donde vas (almaceno en una variable la URI del servicio)
let URI="https://api.spotify.com/v1/artists/1xT5p0VBpnZDrvVSjX9sri/top-tracks?market=US"

//2. qué vas a hacer? (método HTTP)
let metodo="GET"

//3. tenes permisos? (Configurar peticiones)
let token="Bearer BQDYFxZc6u7V7X7pt53daYKLz9wuFnocGrGQpmDihMC9a-W-SJoa2RWNI9bhh95KyQ27cnvxmL-IvjdotQ5aDD4iPReYU9I1-sB0KyGduhtgPKIODps"

let peticion={
    method:metodo,
    headers:{
        "Autorization":token
    }
}

//4. vaya pues traigame cositas (Promesas)
