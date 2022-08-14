// 对象有某个行为，但是在不同的场景中，该行为有不同的实现算法
// 最常见的使用策略模式的场景如登录鉴权，鉴权算法取决于用户的登录方式是手机、邮箱或者第三方的微信登录等等，而且登录方式也只有在运行时才能获取，获取到登录方式后再动态的配置鉴权策略。
/**
 * 登录控制器
 */
function LoginController() {
    this.strategy = undefined;
    this.setStrategy = function (strategy) {
        this.strategy = strategy;
        this.login = this.strategy.login;
    }
}

/**
 * 用户名、密码登录策略
 */
function LocalStragegy() {
    this.login = ({ username, password }) => {
        console.log(username, password);
        // authenticating with username and password... 
    }
}

/**
 * 手机号、验证码登录策略
 */
function PhoneStragety() {
    this.login = ({ phone, verifyCode }) => {
        console.log(phone, verifyCode);
        // authenticating with hone and verifyCode... 
    }
}

/**
 * 第三方社交登录策略
 */
function SocialStragety() {
    this.login = ({ id, secret }) => {
        console.log(id, secret);
        // authenticating with id and secret... 
    }
}

const loginController = new LoginController();

// 调用用户名、密码登录接口，使用LocalStrategy
app.use('/login/local', function (req, res) {
    loginController.setStrategy(new LocalStragegy());
    loginController.login(req.body);
});

// 调用手机、验证码登录接口，使用PhoneStrategy
app.use('/login/phone', function (req, res) {
    loginController.setStrategy(new PhoneStragety());
    loginController.login(req.body);
});

// 调用社交登录接口，使用SocialStrategy
app.use('/login/social', function (req, res) {
    loginController.setStrategy(new SocialStragety());
    loginController.login(req.body);
});