var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = 'https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books';
function httpGetBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        const data = yield response.json();
        return data;
    });
}
export { httpGetBooks };
