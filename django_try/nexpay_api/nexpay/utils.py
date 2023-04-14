import requests

def convert_currency(amount, from_currency, to_currency):
    api_key = 'cda86fc401b230deabce2e5527560401'
    url = f'https://api.currencyscoop.com/v1/convert?api_key={api_key}&from={from_currency}&to={to_currency}&amount={amount}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        converted_amount = data['response'][to_currency]['amount']
        return converted_amount
    else:
        return None
