// Задание 1

function parseCount(num) {
  const result = Number.parseFloat(num);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(num) {
  try {
    return parseCount(num);
  } catch (error) {
    return error;
  }
}

// Задание 2

class Triangle {
  constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    return Number((Math.sqrt((this.a**2 + this.b**2 + this.c**2)**2 - 2*(this.a**4 + this.b**4 + this.c**4)) / 4).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
      get area() {
        return 'Ошибка! Треугольник не существует';
      }
    };
  }
}