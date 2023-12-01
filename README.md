# Features

- Can run on Android, IOS and Web.
- Responsive across different platforms

## If android app's screen orientation is not changing

Modify below line of AndroidManifest.xml file

```
<activity android:name=".MainActivity" android:label="@string/app_name" android:configChanges="keyboard|keyboardHidden|orientation|screenSize|uiMode" android:launchMode="singleTask" android:windowSoftInputMode="adjustResize" android:theme="@style/Theme.App.SplashScreen" android:exported="true" android:screenOrientation="portrait">
```
