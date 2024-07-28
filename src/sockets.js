

export default (io) => {
    io.on ("connection", (socket) => {
        socket.on("orderReceived", async (data) => {
            data = JSON.parse(data);
            const newOrder = {
                _id: data.id,
                products: data.products, // [{_id, description, amount}]
                clientNum: data.clientNum, //0985166762
                description: data.description, //cerca de gran via san jose xd
                total: data.total, //100000
                latitude: data.latitude, //-51.232344
                longitude: data.longitude // -24.324443
            };

            //Metodo de pago etc

            socket.emit("orderPayed", newOrder);
        });

        socket.on("orderReady", async (data) => {
            const orderId = data.id;
            console.log('Orden lista, id: ' +  orderId);
        });

        socket.on("orderGoing", async (data) => {
            const orderId = data.id;
            console.log('Orden en camino, id: ' +  orderId);
        });


    })
}