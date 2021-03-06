class Productos {
    constructor() {
        this.productos = [];
    }

    guardar(title, price, thumbnail) {
        try {
            this.productos.push({
                id: this.productos.length + 1,
                title: title,
                price: price,
                thumbnail: thumbnail
            });


        } catch (error) {
            throw error;
        }
    }

    getProductos() {
        return this.productos;
    }

    listar(id) {
        const producto = this.productos.find(producto => producto.id == id);
        return producto;
    }

    borrar(id) {
        const producto = this.productos.find(producto => producto.id == id);
        let index = this.productos.findIndex(producto);
        this.productos.splice(index, 1);
    }

    update(id) {
        const producto = this.productos.find(producto => producto.id == id);
        if (idx < 0) throw new Error('No found element')
        data[idx] = obj
        return producto;
}
}


// exporto una instancia de la clase
module.exports = Productos;