from cart.cart import Cart
from .cart import Cart


def cart(request):
    return {'cart': Cart(request)}
