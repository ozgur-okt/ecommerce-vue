<template>
    <Navbar />
    <div class="cart">
        <p class="cart-title">SHOPPING CART</p>
        <p @click="removeAllProducts()" class="cart-clean">Remove All Items</p>
        <div v-if="products.length === 0">Your cart is empty.</div>
        <div v-else>
            <div v-for="(product, index) in products" :key="index" class="product-item" :class="getBackgroundClass(index)">
                <div class="product-info">
                    <img :src="product.image" alt="Product Image" class="product-image">
                    <div class="product-details">
                        <div class="product-name">{{ product.name }}</div>
                        <div class="product-color">Color: {{ product.color }}</div>
                        <div class="product-size">{{ product.size }}</div>
                    </div>
                </div>
                <div class="product-quantity">
                    <label for="">QUANTITY</label>
                    <select v-model="product.quantity" class="quantity-select">
                        <option v-for="n in 10" :value="n" :key="n">{{ n }}</option>
                    </select>
                </div>
                <div class="product-price">{{ product.price }} USD </div>
                <div class="product-delete" @click="removeProduct(index)">
                    x
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="total-container">
            <div class="cart-total">
                <div>
                    {{ getTotalPrice() }} USD
                    <p> Including Taxes</p>
                </div>
                <p> I have a coupon code </p>
            </div>
            <button class="checkout">PROCEED TO CHECKOUT <svg width="20px" height="20px" viewBox="0 0 1024 1024"
                    class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#fff" />
                </svg></button>
        </div>
        <div class="line"></div>
        <Footer />
    </div>
</template>
  
<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

export default {
    name: "Cart",
    data() {
        return {
            products: [
                {
                    image: require("@/assets/ProductDetail/Cart1.png"),
                    name: "PUMA X P.A.M. Men Puffer Jacket",
                    color: "Orange Brick",
                    size: "M / MEDIUM",
                    quantity: 1,
                    price: 200.0,
                },
                {
                    image: require("@/assets/ProductDetail/Cart2.png"),
                    name: "PUMA X POKÉMON RS-X PIKACHU",
                    color: "Empire Yellow-Pale Lemon",
                    size: "28",
                    quantity: 2,
                    price: 250.0,
                },
                {
                    image: require("@/assets/ProductDetail/Cart3.png"),
                    name: "PUMA X P.A.M. Women Half Zipper",
                    color: "Puma Black",
                    size: "S / SMALL",
                    quantity: 2,
                    price: 300.0,
                }
            ],
        };
    },
    methods: {
        removeProduct(index) {
            this.products.splice(index, 1);
        },
        getTotalPrice() {
            return this.products.reduce(
                (total, product) => total + product.price * product.quantity,
                0
            );
        },
        removeAllProducts() {
            this.products = []
        }
    },
    computed: {
        getBackgroundClass() {
            return (index) => {
                return index % 2 === 0 ? 'even' : 'odd';
            };
        },
    },
    components: {
        Navbar,
        Footer
    }
};
</script>
  
<style scoped>
/* Cart styles */
.cart {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cart-title {
    font-size: 20px;
    letter-spacing: 4px;
    font-weight: lighter;
}

.cart-clean {
    cursor: pointer;
    color: rgb(36, 101, 187);
    align-self: flex-end;
    margin-right: 6.5vw;
}

.product-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: 80vw;
    height: 100px;
    padding: 0.5rem 3rem;
}

.product-item.odd {
    background-color: #f2f2f2;
}

.product-info {
    display: flex;
}

.product-image {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    margin-right: 1rem;
}

.product-name {
    font-weight: bold;
}

.quantity-select {
    border-color: rgba(128, 128, 128, 0.46);
    color: black;
    height: 60px;
    width: 110px;
    padding: 10px 5px 0px 5px;
}

.product-quantity label {
    color: rgba(128, 128, 128, 0.634);
    position: relative;
    font-size: 12px;
    bottom: 20px;
    left: 65px;
}

.product-delete {
    cursor: pointer;
    font-size: 20px;
    font-weight: 500;
    color: gray;
}

.line {
    border-bottom: 1px solid rgba(128, 128, 128, 0.361);
    width: 87vw;
    margin: 0 auto;
}

.total-container {
    align-self: flex-end;
    margin: 2rem 6.5vw 0 0;

}

.cart-total {
    display: flex;
    justify-content: space-between;
    width: 23rem;
    line-height: 0.7rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
}

.cart-total :nth-child(1) {
    color: black;
}

.cart-total div {
    font-size: 1.2rem;
}

.cart-total p:nth-child(1) {
    font-size: 0.8rem;
    color: gray;
}

.cart-total p:nth-child(2) {
    font-size: 0.8rem;
    color: rgb(36, 101, 187);
}

.checkout {
    border: none;
    color: white;
    background-color: black;
    height: 50px;
    width: 23rem;
    letter-spacing: 3px;
    margin-bottom: 80px;
    padding: 0 0 5px 18px;
}

.icon {
    position: relative;
    left: 1.9rem;
    top: 0.3rem;
}
@media (max-width: 767px) {
    .product-quantity label {
        position: relative;
        top: 25px;
        left: 5px;
    }
}
</style>
  