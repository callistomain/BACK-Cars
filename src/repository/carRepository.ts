import { prisma } from "../config/database.js";

async function getCars() {
  return await prisma.cars.findMany();
}

async function getCar(id: number) {
  return await prisma.cars.findUnique({
    where: { id }
  })
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.cars.findUnique({
    where: { licensePlate }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return await prisma.cars.create({
    data: {
      model,
      licensePlate,
      year: year.toString(),
      color
    }
  })
}

async function deleteCar(id: number) {
  return await prisma.cars.delete({
    where: { id }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;