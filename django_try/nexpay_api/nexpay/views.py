from django.shortcuts import render, redirect
from django.http import HttpResponse
from .utils import convert_currency
from django.contrib.auth import authenticate, login, logout
from django.views.generic import View


from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework import viewsets

from .models import Item, ForexRate, Payment
from .serializers import ItemSerializer, ForexRateSerializers, PaymentSerializers



def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        if user:
            login(request, user)
            return redirect('home')
        else:
            error_message = 'Invalid login credentials'
            return render(request, 'login.html', {'error_message': error_message})
    else:
        return render(request, 'login.html')


def index(request):
    return render(request, 'hello_nexpay.html')

def payment(request):
    if request.method == 'POST':
        amount = request.POST['amount']
        from_currency = request.POST['from_currency']
        to_currency = request.POST['to_currency']
        converted_amount = convert_currency(amount, from_currency, to_currency)
        if converted_amount:
            return converted_amount
        else:
            # Handle error
            return f"NO AVAILABLE AMOUNT{amount} TO CONVERT{converted_amount} "
    else:
        # Render payment form
        return render(request, 'convert.html')
        


class LoginView(View):
    def get(self, request):
        return render(request, 'login.html')

    def post(self, request):
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('hello_nexpay')
        else:
            error_message = 'Invalid login credentials'
            return render(request, 'login.html', {'error_message': error_message})

class LogoutView(View):
    def get(self, request):
        logout(request)
        return redirect('index')



# from rest_framework.decorators import api_view
class ItemViewSet(viewsets.ModelViewSet):
    serializer_class = ItemSerializer

    def get_queryset(self):
        return Item.objects.all()
