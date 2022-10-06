#Projeto para estudos de node utilizando GCP, Firebase and Firestore
##Para execução da api é necessário configurar o arquivo .env de acordo com o modelo da Google e seguindo este padrão:

TYPE=
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_X509_CERT_URL=
CLIENT_X509_CERT_URL=

#Após essa configuração, basta executar 'npm run build' e após 'npm run dev', o que deve iniciar o servidor já com as configurações propostas. Observe que após a execução do script, um arquivo json será criado na pasta database, verifique se este arquivo possui as credenciais que você definiu no arquivo .env.

#O módulo útil 'createServiceAccountFile.js' é uma forma simples de evitar expor arquivos JSON com credenciais sensíveis. Ele pega um objeto com as variáveis de ambiente setadas que, caso opte por mudar, basta substituir e configurar o objeto de acordo com o modelo desejado, em seguida realiza a conversão do objeto para uma string, obrigatoriamente as credenciais do Firebase devem ser strings, utiliza algumas regras de REGEXP para corrigir as strings e por último escreve um arquivo no diretório onde o Firebase procura o JSON para autenticação.

\*English

#Project for node studies using GCP, Firebase and Firestore
##To run the API it is necessary to configure the .env file according to the Google model and following this pattern:

TYPE=
PROJECT_ID=
PRIVATE_KEY_ID=
PRIVATE_KEY=
CLIENT_EMAIL=
CLIENT_ID=
AUTH_URI=
TOKEN_URI=
AUTH_PROVIDER_X509_CERT_URL=
CLIENT_X509_CERT_URL=

#After this configuration, just run 'npm run build' and after 'npm run dev', which should start the server with the proposed settings. Note that after running the script, a json file will be created in the database folder, make sure this file has the credentials you defined in the .env file.

#The useful module 'createServiceAccountFile.js' is a simple way to avoid exposing JSON files with sensitive credentials. It takes an object with the environment variables set, which, if you choose to change it, just replace and configure the object according to the desired model, then perform the conversion of the object to a string, Firebase credentials must be strings, uses some REGEXP rules to correct the strings and finally writes a file in the directory where Firebase looks for the JSON for authentication.
