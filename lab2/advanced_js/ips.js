async function checkIpAddresses() {
    const restrictedCountries = ["Russian Federation", "Belarus", "Afghanistan", "China", "Venezuela", "Iran"];
    const ips = [];
    for (let i = 1; i <= 5; i++) {
        let ip = prompt(`Введите IP-адрес №${i}:`);
        if (ip === null) return;
        ips.push(ip);
    }

    try {
        const checks = ips.map(ip =>
            fetch(`https://json.geoiplookup.io/${ip}`)
                .then(res => res.json())
                .catch(error => ({ success: false, error: `Invalid IP address: ${ip}` }))
        );
        const results = await Promise.all(checks);

        console.log(results); 

        const blocked = results.some(data => {
            if (data.success === false) {
                console.error(`Ошибка для IP: ${data.error}`);
                return false; 
            }
            console.log(`Проверяем страну для IP: ${data.ip} — Страна: ${data.country_name}`);
            return restrictedCountries.includes(data.country_name);
        });

        if (blocked) {
            alert("Our services are not available in your country");
        } else {
            alert("Welcome to our website!");
        }
    } catch (error) {
        alert("Ошибка при проверке IP-адресов");
        console.error("Ошибка:", error);
    }
}

checkIpAddresses()

/*
85.143.122.40
5.12.89.0
12.90.32.0
115.81.42.10
220.37.21.80
95.23.12.44
*/