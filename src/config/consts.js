import dropdowninfo from "./dropdowninfo"
import pathInfo from "./pathInfo"

const INICIO = new pathInfo("/", "Inicio")
const QUIENES_SOMOS = new pathInfo("/", "¿Quiénes Somos?")
const PARVULOS = new pathInfo(
  "/timeline",
  'La Lucha Estudiantil De Los "Párvulos Guerrilleros" Del Tec'
)
const ASOCIACIONES = new pathInfo(
  "/asociaciones",
  "Asociaciones De Estudiantes"
)
const CONSEJOS = new pathInfo("/consejos/", "Consejos FEITEC")
const ORGANOS = new pathInfo("/organosfederados/", "Órganos Federados")
const GRUPOS_DEPORTIVOS = new pathInfo("/", "Grupos Deportivos")
const GRUPOS_CULTURALES = new pathInfo("/", "Grupos Culturales")
const NORMATIVA = new pathInfo("/normativas/", "Normativa")
//const NOTICIAS = new pathInfo("/noticias", "Noticias")
const EVENTOS = new pathInfo("/eventos", "Eventos")
const CONTACTENOS = new pathInfo("#", "Contactenos")

const ACERCA_DE = new dropdowninfo([QUIENES_SOMOS, PARVULOS], "Sobre Nosotros")
const REPRESENTACION_ESTUDIANTIL = new dropdowninfo(
  [ASOCIACIONES, CONSEJOS, ORGANOS, GRUPOS_DEPORTIVOS, GRUPOS_CULTURALES],
  "Representación"
)

export const HEADER = [
  INICIO,
  ACERCA_DE,
  REPRESENTACION_ESTUDIANTIL,
  NORMATIVA,
  EVENTOS,
  CONTACTENOS,
]

export const MAIN_COLOR = "#00AEE0"
export const AZUL_FEITEC = "#004581"
