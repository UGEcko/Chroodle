# Environment Data
A directory holding extensive Beat Saber environment information. 

### Directory
- ~~1.29.1~~ (Coming soon)
- [1.34.2](https://github.com/UGEcko/Chroodle/tree/main/EnvironmentData/1.34.2)
- [1.37.1](https://github.com/UGEcko/Chroodle/tree/main/EnvironmentData/1.37.1)
- [1.39.1](https://github.com/UGEcko/Chroodle/tree/main/EnvironmentData/1.39.1)
- [1.40.0](https://github.com/UGEcko/Chroodle/tree/main/EnvironmentData/1.40.0)

## Structure
Each environment here is represented as a JSON file. 
<br>
It consists of:
* Environment Data (Color Scheme and Fog Parameters)
* Object Data (Name, Chroma ID, and a select list of components)

Its like Chroma Logs and [bs-env](https://github.com/Top-Cat/bs-env) had a child.

```json
{
  "environmentData": {
    "colorScheme": {
      "colorLeft": [float,float,float],
      "colorRight": [float,float,float],
      "envColorLeft": [float,float,float],
      "envColorRight": [float,float,float],
      "obstacleColor": [float,float,float],
      "envColorLeftBoost": [float,float,float],
      "envColorRightBoost": [float,float,float]
    },
    "fogParams": {
      "offset": float,
      "height": float,
      "startY": float,
      "attenuation": float
    }
  },
  "objects": [
    {
      "name": "GameObject Name",
      "id": "ChromaID",
      "components": {
        "Transform": {
          "position": [float,float,float],
          "localPosition": [float,float,float],
          "rotation": [float,float,float],
          "localRotation": [float,float,float],
          "scale": [float,float,float]
        },
        "OtherComponent": {}
      }
    }
  ]
}
```

## Components

99% of components will have a `Transform` component, but some may have more to help out with specific cases.

The following components will be listed with selected properties:
* **Transform**
* * position
* * localPosition
* * rotation
* * localRotation
* * localScale
* TrackLaneRingsManager
* * ringCount
* * ringPositionZStep
* MeshFilter
* * boundCenter
* * boundSize
* TubeBloomPrePassLight
* * colorAlphaMultiplier
* * bloomFogIntensityMultiplier
* * length
* * width
* DirectionalLightWithId
* * lightId
* Animator
* * animatorParameters
* * animatorLayerNames

The following components will be listed *without* any properties listed:
* Spectrogram
* Mirror
* ParticleSystem
* SpriteRenderer
* SaberBurnMarkArea
* DirectionalLight
* LightManager
* Canvas
* VideoPlayer
* RawImage
* SpriteWithLightId

(See below if you are looking to create your own log with more whitelisted components.)

## Data Usage(Coming Soon)