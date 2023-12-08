import {PrismaClient, Raid, Type} from "@prisma/client";

const prisma = new PrismaClient();

export const createNewRaid = async (name: string, type: string, star: number): Promise<Raid> => {
    return prisma.raid.create({
        data: {
            name: name,
            type: getTypeFromString(type),
            star: safeStarValue(star)
        }
    });
}

export const getAllRaids = async (): Promise<Raid[]> => {
    return prisma.raid.findMany()
}

const getTypeFromString = (type: string): Type => {
    for (let typeKey in Type) {
        if(type.toUpperCase() === typeKey) {
            return type.toUpperCase() as Type;
        }
    }
    return Type.NORMAL;
}

const safeStarValue = (star: number) => {
    if(star < 1) {
        return 1;
    }
    if(star > 7) {
        return 7;
    }
    return star;
}