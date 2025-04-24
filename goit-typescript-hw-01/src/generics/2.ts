type AllType = {
      name: string;
      position: number;
      color: string;
      weight: number
    }
    
    function compare <K extends keyof AllType>(
        top: Pick<AllType, K>,
        bottom: Pick<AllType, K>
        ): AllType {
      return {
        name: (top as any).name ?? "unknown",
        position: (top as any).position ?? 0,
        color: (top as any).color ?? "white",
        weight: (top as any).weight ?? 0,
      }
    }
    