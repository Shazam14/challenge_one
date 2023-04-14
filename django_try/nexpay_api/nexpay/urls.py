from django.urls import path
from .views import payment, index, LoginView, LogoutView


urlpatterns = [
    path('index/', index, name='index'),
    path('payment/', payment, name='payment'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
]

