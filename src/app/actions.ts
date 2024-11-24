"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function searchUniversities(country: string) {
  const response = await fetch(
    `http://universities.hipolabs.com/search?country=${country}`
  );
  const data = await response.json();
  return data;
}

export async function addToFavorites(university: {
  name: string;
  "state-province": string | null;
  web_pages: string[];
}) {
  return await prisma.favorite.create({
    data: {
      name: university.name,
      stateProvince: university["state-province"],
      webPages: university.web_pages,
    },
  });
}

export async function getFavorites() {
  return await prisma.favorite.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function removeFavorite(id: number) {
  return await prisma.favorite.delete({
    where: {
      id,
    },
  });
}
