// 代理模式解决的问题
// 1、增加对一个对象的访问控制
// 2、当访问一个对象的过程中需要增加额外的逻辑
function StockPriceAPI() {
    // Subject Interface实现
    this.getValue = function (stock, callback) {
        console.log('Calling external API ... ');
        setTimeout(() => {
            switch (stock) {
                case 'GOOGL':
                    callback('$1265.23');
                    break;
                case 'AAPL':
                    callback('$287.05');
                    break;
                case 'MSFT':
                    callback('$173.70');
                    break;
                default:
                    callback('');
            }
        }, 2000);
    }
}


function StockPriceAPIProxy() {
    // 缓存对象
    this.cache = {};
    // 真实API对象
    this.realAPI = new StockPriceAPI();
    // Subject Interface实现
    this.getValue = function (stock, callback) {
        const cachedPrice = this.cache[stock];
        if (cachedPrice) {
            console.log('Got price from cache');
            callback(cachedPrice);
        } else {
            this.realAPI.getValue(stock, (price) => {
                this.cache[stock] = price;
                callback(price);
            });
        }
    }
}

const api = new StockPriceAPIProxy();
api.getValue('GOOGL', (price) => { console.log(price) });
api.getValue('AAPL', (price) => { console.log(price) });
api.getValue('MSFT', (price) => { console.log(price) });

setTimeout(() => {
    api.getValue('GOOGL', (price) => { console.log(price) });
    api.getValue('AAPL', (price) => { console.log(price) });
    api.getValue('MSFT', (price) => { console.log(price) });
}, 3000)