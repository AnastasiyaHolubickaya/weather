export const filter = (data: any) => {
    let mass: any = [];
     data.map((list: any, index: number) => index % 8 === 0 && mass.push(list));
    return mass
};
