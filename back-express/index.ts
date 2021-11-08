import express, { Application, Request, Response } from "express";

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app: Application = express();
const port = 3000;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get(
    "/",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({
            message: "Hello World!",
        });
    }
);

try {
    app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
    });
} catch (error: unknown) {
	if (error instanceof Error)
    	console.error(`Error occured: ${error.message}`);
}

