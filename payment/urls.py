from django.urls import path

from . import views

app_name = 'payment'

urlpatterns = [
    path('', views.CartView, name='cart'),
    #path('orderplaced/', views.order_placed, name='order_placed'),
    #path('error/', views.Error.as_view(), name='error'),
    path('verify/', views.payment_process, name='payment_process'),
    path('done/', views.payment_done, name='payment_done'),
  
]
