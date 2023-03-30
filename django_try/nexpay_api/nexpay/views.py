from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .services import ForexService

@csrf_exempt
def get_rate(request):
    if request.method == "GET":
        from_currency = request.POST.get("from_currency")
        to_currency = request.POST.get("to_currency")
        amount = request.POST.get("amount")
        forex_service = ForexService()
        rate = forex_service.get_rate(from_currency, to_currency, amount)
        return JsonResponse({"rate": rate})
    else:
        return JsonResponse({"error": "Invalid request method"})
    

# def get_check(request):
#     from
