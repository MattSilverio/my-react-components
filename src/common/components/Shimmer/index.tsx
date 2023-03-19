import * as React from "react";
import { IShimmerProps } from "@fluentui/react";
import { Fabric, Shimmer, ShimmerElementType } from "office-ui-fabric-react";

interface IShimmerComponentProps extends IShimmerProps {
  children: any;
  isLoaded: boolean;
  width: number | string;
  height: number;
}

export const ShimmerComponent = ({ children, isLoaded, width, height, ...rest }: IShimmerComponentProps) => {
  return (
    <Fabric>
      <Shimmer
        shimmerElements={[{ type: ShimmerElementType.line, height: height, width: width }]}
        isDataLoaded={isLoaded}
      >
        {children}
      </Shimmer>
    </Fabric>
  );
};
