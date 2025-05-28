import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Defina as opções para o Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'SISTEMA ACADÊMICO',
            version: '1.0.0',
            description: 'Documentação da API do Sistema Acadêmico - UNEMAT',
        },
    },
    apis: ['../controllers/*.js'],
};

const specs = swaggerJsDoc(options);
const swagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default swagger;
