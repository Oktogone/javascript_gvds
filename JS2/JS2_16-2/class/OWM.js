class OWM {
	idVille;
	constructor(idVille) {
		this.idVille = idVille;
	}

	/*
	 * Effectue une requête Fetch vers OWM pour la ville reçue lors de l'instanciation.
	 * Retourne une promesse avec en valeur d'aboutissement un objet contenant les données attendues.
	*/
	async charger() {
		const CLE_API = '2ba6f9f7ef12f57d58aceb159098b5f8';
		const URL = `https://api.openweathermap.org/data/2.5/weather?id=${this.idVille}&units=metric&lang=fr&appid=${CLE_API}`;
		const BASE_URL_ICONE = 'https://openweathermap.org/img/wn';
		const response = await fetch(URL);
		const data = await (response.ok ? response.json() : Promise.reject());
		return await Promise.resolve({
			description: data.weather[0].description,
			urlIcone: `${BASE_URL_ICONE}/${data.weather[0].icon}@2x.png`,
			tempMin: Math.round(data.main.temp_min),
			tempMax: Math.round(data.main.temp_max),
			hygro: data.main.humidity,
		});
	}
}
