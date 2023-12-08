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

export const getAllRaids = (): Promise<Raid[]> => {
    return prisma.raid.findMany()
}

export const getRaidById = (id: number): Promise<Raid> => {
    return prisma.raid.findFirstOrThrow({
        where: {
            id: id
        }
    })
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