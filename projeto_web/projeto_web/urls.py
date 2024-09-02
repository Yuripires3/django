
from django.urls import path
from app_projeto_web import views

urlpatterns = [
    # rota, view resposável, nome de referência
    # usuarios.com
    path('', views.home,name='home'),
]
