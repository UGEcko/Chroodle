## Extended Data
This area of Chroodle houses Log-Like JSON files that includes information of every environment object.

Data:
* Chroma ID
* Transform
* * Position / Local Position
  * Rotation / Local Rotation
  * Scale
* Component Data
* * BloomFogEnvironment
  * * attenuation
    * startY
    * offset
    * height
  * TubeBloomPrePassLight/(WithId)
  * * bloomFogIntensityMultiplier
    * colorAlphaMultiplier
    * lightWidthMultiplier
    * * lightId
  * DirectionalLightWithId
  * * lightId
  * TrackLaneRing/(Manager)
  * * destRotZ
    * * step
      * ringsCount

This is what an object in the log would look like:
```json
[
  {
    "id": "DefaultEnvironment.[0]Environment",
    "transform": {
      "position": [
        0.0,
        0.0,
        0.0
      ],
      "localPosition": [
        0.0,
        0.0,
        0.0
      ],
      "rotation": [
        0.0,
        0.0,
        0.0
      ],
      "localRotation": [
        0.0,
        0.0,
        0.0
      ],
      "scale": [
        1.0,
        1.0,
        1.0
      ]
    },
    "components": {
      "BloomFogEnvironment": {
        "attenuation": 0.002,
        "startY": -50.0,
        "offset": 0.0,
        "height": 25.0
      }
    }
  }
]
```

## Extra Info
A proprietary mod was made to create these mods. I'm willing to release it however I will provide no support towards any issues you may have if you decide to use it. Also, there is a known issue where TrackLaneRings have a crazy high chromaID index. It gets fixed by getting matched up again with the proper ID since the sorting system is the same as Chroma (Literally just copied the system for compatibility). This issue will most likely not get fixed since the external script to fix it was a last-last resort. Grab the plugin [here]() (should be version agnostic, but was made for 1.34.2)

Also, this part of the repo was not made to replace chroma logs or anything like that. It is to provide additional information to those who need it, and its not recommended to replace chroma logs with this. I recommend using this part of the repo with a simple http fetch system and parser to find the object you want via its ID and further getting its data. An example script can be found [here]().
