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

