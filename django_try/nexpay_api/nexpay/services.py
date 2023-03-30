import requests

payload = {}
headers= {
  "apikey": "MrJXbLuTEtDMORlzd9bsneJvyZUcY4fG"
}

class ForexService:
    base_url = "https://api.apilayer.com/exchangerates_data/"

    def get_rate(self, from_currency, to_currency, amount):
        response = requests.get("{self.base_url}/convert?to={from_currency}&from={to_currency}&amount={amount}")
        print(response)
        status_code = response.status_code
        print(status_code)
        if response.status_code != 200:
            raise Exception("Error retrieving exchange rate")

        data = response.json()
        print("this is the data: ",data)
        rate = data["rates"][to_currency]
        return rate
    



