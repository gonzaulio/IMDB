import { professional } from "./Professional";

let professional1:professional = new professional("Penélope Cruz", 47, "Femenino", 80, 1.70, "Negro", "Marrón", "Hispana", false, "Española", 3, "Actriz");
let professional2:professional = new professional("Edgar Ramirez", 38, "Masculino", 92, 1.84, "Marrón", "Verdes", "Hispana", false, "Venezolano", 0, "Actor");
let professional3:professional = new professional("Viola Davis", 45, "Femenino", 82, 1.68, "Negro", "Negros", "Afroamericana", false, "Estadounidense", 1, "Actriz");

professional2.printAll();
professional1.printAll();