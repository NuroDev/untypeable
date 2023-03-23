import { describe, it } from "vitest";

import { StarlinkSatelliteSchema, StarlinkSatellitesSchema } from "../src/zod";
import { useTestClient } from "./_client";

describe.concurrent("SpaceX - Starlink", () => {
  const client = useTestClient();

  it("GET - /v4/starlink", async ({ expect }) => {
    const starlinkSatellites = await client("/v4/starlink");

    expect(starlinkSatellites).toBeDefined();
    expect(Array.isArray(starlinkSatellites)).toBe(true);
    expect(starlinkSatellites.at(0)).toBeDefined();
    expect(starlinkSatellites.at(0)).toMatchSnapshot({
      height_km: null,
      id: "5eed770f096e59000698560d",
      latitude: null,
      launch: "5eb87d30ffd86e000604b378",
      longitude: null,
      spaceTrack: {
        CCSDS_OMM_VERS: "2.0",
        COMMENT: "GENERATED VIA SPACE-TRACK.ORG API",
        CREATION_DATE: "2020-10-13T04:16:08",
        ORIGINATOR: "18 SPCS",
        OBJECT_NAME: "STARLINK-30",
        OBJECT_ID: "2019-029K",
        CENTER_NAME: "EARTH",
        REF_FRAME: "TEME",
        TIME_SYSTEM: "UTC",
        MEAN_ELEMENT_THEORY: "SGP4",
        EPOCH: "2020-10-13T02:56:59.566560",
        MEAN_MOTION: 16.43170483,
        ECCENTRICITY: 0.0003711,
        INCLINATION: 52.9708,
        RA_OF_ASC_NODE: 332.0356,
        ARG_OF_PERICENTER: 120.7278,
        MEAN_ANOMALY: 242.0157,
        EPHEMERIS_TYPE: 0,
        CLASSIFICATION_TYPE: "U",
        NORAD_CAT_ID: 44244,
        ELEMENT_SET_NO: 999,
        REV_AT_EPOCH: 7775,
        BSTAR: 0.0022139,
        MEAN_MOTION_DOT: 0.47180237,
        MEAN_MOTION_DDOT: 0.000012426,
        SEMIMAJOR_AXIS: 6535.519,
        PERIOD: 87.635,
        APOAPSIS: 159.809,
        PERIAPSIS: 154.958,
        OBJECT_TYPE: "PAYLOAD",
        RCS_SIZE: "LARGE",
        COUNTRY_CODE: "US",
        LAUNCH_DATE: "2019-05-24",
        SITE: "AFETR",
        DECAY_DATE: "2020-10-13",
        DECAYED: 1,
        FILE: 2850561,
        GP_ID: 163365918,
        TLE_LINE0: "0 STARLINK-30",
        TLE_LINE1:
          "1 44244U 19029K   20287.12291165  .47180237  12426-4  22139-2 0  9995",
        TLE_LINE2:
          "2 44244  52.9708 332.0356 0003711 120.7278 242.0157 16.43170483 77756",
      },
      velocity_kms: null,
      version: "v0.9",
    });

    expect(StarlinkSatellitesSchema.safeParse(starlinkSatellites).success).toBe(
      true
    );
  });

  it("GET - /v4/starlink/:id", async ({ expect }) => {
    const starlinkSatellite = await client("/v4/starlink/:id", {
      id: "5eed770f096e59000698560d",
    });

    expect(starlinkSatellite).toBeDefined();
    expect(starlinkSatellite).toMatchSnapshot({
      height_km: null,
      id: "5eed770f096e59000698560d",
      latitude: null,
      launch: "5eb87d30ffd86e000604b378",
      longitude: null,
      spaceTrack: {
        CCSDS_OMM_VERS: "2.0",
        COMMENT: "GENERATED VIA SPACE-TRACK.ORG API",
        CREATION_DATE: "2020-10-13T04:16:08",
        ORIGINATOR: "18 SPCS",
        OBJECT_NAME: "STARLINK-30",
        OBJECT_ID: "2019-029K",
        CENTER_NAME: "EARTH",
        REF_FRAME: "TEME",
        TIME_SYSTEM: "UTC",
        MEAN_ELEMENT_THEORY: "SGP4",
        EPOCH: "2020-10-13T02:56:59.566560",
        MEAN_MOTION: 16.43170483,
        ECCENTRICITY: 0.0003711,
        INCLINATION: 52.9708,
        RA_OF_ASC_NODE: 332.0356,
        ARG_OF_PERICENTER: 120.7278,
        MEAN_ANOMALY: 242.0157,
        EPHEMERIS_TYPE: 0,
        CLASSIFICATION_TYPE: "U",
        NORAD_CAT_ID: 44244,
        ELEMENT_SET_NO: 999,
        REV_AT_EPOCH: 7775,
        BSTAR: 0.0022139,
        MEAN_MOTION_DOT: 0.47180237,
        MEAN_MOTION_DDOT: 0.000012426,
        SEMIMAJOR_AXIS: 6535.519,
        PERIOD: 87.635,
        APOAPSIS: 159.809,
        PERIAPSIS: 154.958,
        OBJECT_TYPE: "PAYLOAD",
        RCS_SIZE: "LARGE",
        COUNTRY_CODE: "US",
        LAUNCH_DATE: "2019-05-24",
        SITE: "AFETR",
        DECAY_DATE: "2020-10-13",
        DECAYED: 1,
        FILE: 2850561,
        GP_ID: 163365918,
        TLE_LINE0: "0 STARLINK-30",
        TLE_LINE1:
          "1 44244U 19029K   20287.12291165  .47180237  12426-4  22139-2 0  9995",
        TLE_LINE2:
          "2 44244  52.9708 332.0356 0003711 120.7278 242.0157 16.43170483 77756",
      },
      velocity_kms: null,
      version: "v0.9",
    });

    expect(StarlinkSatelliteSchema.safeParse(starlinkSatellite).success).toBe(
      true
    );
  });
});
