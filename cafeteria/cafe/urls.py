from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("pizza", views.pizza, name="pizzas"),
    path("burger", views.burger, name="burgers"),
    path("order", views.order, name="order")
]