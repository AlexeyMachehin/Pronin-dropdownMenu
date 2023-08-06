export enum Position {
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
}

export enum Coordinate {
  Auto = 'auto',
  Full = '100%',
  Zero = '0',
}

export namespace Position {
  const TO_MAP_VERTICAL_COORDINATE: Record<Position, Coordinate> = {
    [Position.TopLeft]: Coordinate.Auto,
    [Position.TopRight]: Coordinate.Auto,
    [Position.BottomLeft]: Coordinate.Auto,
    [Position.BottomRight]: Coordinate.Auto,
  };

  const TO_MAP_DEFAULT_VERTICAL_COORDINATE: Record<Position, Coordinate> = {
    [Position.TopLeft]: Coordinate.Full,
    [Position.TopRight]: Coordinate.Full,
    [Position.BottomLeft]: Coordinate.Full,
    [Position.BottomRight]: Coordinate.Full,
  };

  const TO_MAP_DEFAULT_HORIZONTAL_COORDINATE: Record<Position, Coordinate> = {
    [Position.TopLeft]: Coordinate.Zero,
    [Position.TopRight]: Coordinate.Zero,
    [Position.BottomLeft]: Coordinate.Zero,
    [Position.BottomRight]: Coordinate.Zero,
  };

  export function getTopCoordinate(position: Position): Coordinate {
    if (position === Position.TopLeft || position === Position.TopRight) {
      return TO_MAP_VERTICAL_COORDINATE[position];
    }

    return TO_MAP_DEFAULT_VERTICAL_COORDINATE[position];
  }

  export function getBottomCoordinate(position: Position): Coordinate {
    if (position === Position.BottomLeft || position === Position.BottomRight) {
      return TO_MAP_VERTICAL_COORDINATE[position];
    }

    return TO_MAP_DEFAULT_VERTICAL_COORDINATE[position];
  }

  export function getLeftCoordinate(position: Position): Coordinate {
    if (position === Position.BottomLeft || position === Position.TopLeft) {
      return TO_MAP_VERTICAL_COORDINATE[position];
    }

    return TO_MAP_DEFAULT_HORIZONTAL_COORDINATE[position];
  }

  export function getRightCoordinate(position: Position): Coordinate {
    if (position === Position.BottomRight || position === Position.TopRight) {
      return TO_MAP_VERTICAL_COORDINATE[position];
    }

    return TO_MAP_DEFAULT_HORIZONTAL_COORDINATE[position];
  }
}
