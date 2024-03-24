class AppConfig {
    public productsUrl = 'http://host.docker.internal:3001/api/products';
    public employeesUrl = 'http://host.docker.internal:3001/api/employees';
    public signupUrl = 'http://host.docker.internal:3001/api/register';
    public loginUrl = 'http://host.docker.internal:3001/api/login';
    public categoriesUrl = 'http://host.docker.internal:3001/api/categories';
    public successNotificationDuration = 2000;
    public errorNotificationDuration = 6000;
}

const appConfig = new AppConfig();
export default appConfig;