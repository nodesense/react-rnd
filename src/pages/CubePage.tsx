import React from "react";
import { Layout, Divider, Empty, Select } from "antd";
import { QueryBuilder } from "@cubejs-client/react";
import cubejs from "@cubejs-client/core";
import "antd/dist/antd.css";

import ChartRenderer from "./ChartRenderer";

const cubejsApi = cubejs(
"a74d5b4de253f9e6266903cff4f7cf0cde2c78de3febd2c71dfdf8332da396b6e4c956a5a58276cd2d13ab4baae95b1c475cbf9cbee7c910a22f1512e3572e32",
 { apiUrl: "http://localhost:4000/cubejs-api/v1" }
);

const CubePage = () => (
 <QueryBuilder
   query={{
        measures: ['Devices.count'],
        dimensions: ['Devices.source'],
   }}
   cubejsApi={cubejsApi}
   render={({ resultSet, measures, availableMeasures, updateMeasures }: any) => (
      <div>
          <pre>{JSON.stringify(resultSet, null, 4)}</pre>
      </div>
    
   )}
 />
);

export default CubePage;