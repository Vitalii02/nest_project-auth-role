import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";

const PORT = process.env.PORT || 3000;

const start = async () => {
    const app = await NestFactory.create(AppModule)

    await app.listen(PORT, () => console.log('Все ок'))
}


start()