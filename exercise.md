Bajo las parejas establecidas, desarrollar una o varias páginas según su diseño, que permita atender el requerimiento de la Cava. El gobernador quiere realizar un triatlon con 3 disciplina: Caminata 10K, Natación 10K, Ciclismo 30K, necesita un desarrollo web que le permita registrar a los participantes previo al evento, dónde se registraran con su cédula, nombre, municipio de dónde vienen y su edad; luego el día del evento se debe identificar quienes vinieron a participar. Todos los que llegaron al evento parten a la misma hora en la primera disciplina, cabe destacar que la hora debe ser solicitada en el formato HH:MM:SS que será el mismo formato para toda expresión de tiempo, tomando en cuenta que una persona normal puede caminar a una velocidad de 7 K/H, deberán crear una variable random que determine cada segundo la distancia recorrida que iría entre cero(0) y la distancia máxima que puede recorrer según la velocidad indicada anteriormente.una vez cumplida la distancia total debe registrar la hora de culminación de la primera disciplina por cada participante, que va a ser la misma hora de inicio de la siguiente disciplina. Tomando en cuenta que un nadador va a una velocidad de 1,72 m/s al igual que en la caminata creará una variable random que determine cada segundo la distancia recorrida bajo el mismo criterio, una vez cumplida la distancia marcará por cada participante la hora de llegada, está será la hora de inicio de la siguiente y última disciplina, tomando en cuenta que un ciclista tiene una velocidad de recorrido de 45 K/H, creará una variable random que determine cada segundo la distancia, una vez terminado el recorrido total indicará la hora de finalización.

Cada segundo debe mostrar una tabla con todos los participantes ordenado desde el participante que lleva mayor recorrido en menor tiempo hasta el participante que lleva el menor recorrido en el mayor tiempo. Si por alguna razón alguna de las variables random tenga un valor menor a 1, descalificará al participante, por lo que debe ser mostrado al final de la tabla como descalificado.

 La Tabla debe indicar:

Nombre, Cédula, Mcpio, Edad, hora de inicio y fin de cada disciplina, Tiempo de recorrido o Descalificado según sea el caso.

Es importante usar transformaciones y transiciones en todas las páginas  creadas.

------------

[] Landing Page con información de la organización
[] Registro de participantes
- Nombre, Cédula, Municipio, Edad
- Hora de inicio y fin de cada disciplina
- Tiempo de recorrido o Descalificado según sea el caso
[] Confirmación de participantes
- Cards con información de cada participante
[] Tabla de resultados
- Nombre, Cédula, Municipio, Edad, hora de inicio y fin de cada disciplina, Tiempo de recorrido o Descalificado según sea el caso
- Generar resultados de la tabla