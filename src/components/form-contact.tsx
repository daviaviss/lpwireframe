import {
    Card,
    Input,
    Textarea,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export function FormContact() {
    return (
        <section className="py-10 px-4 md:py-28 lg:px-12 flex justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Entre em contato
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Lorem ipsum dolor sit amet, consectetur.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Seu nome
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Nome Sobrenome"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Seu Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="exemplo@email.com"
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Mensagem
                        </Typography>
                        <Textarea
                            size="lg"
                            placeholder="Escreva sua mensagem aqui..."
                            className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                Eu aceito os&nbsp;
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    termos e condições de privacidade
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Enviar
                    </Button>
                </form>
            </Card>
        </section>
    );
}
