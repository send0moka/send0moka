# **Analisis Pola Penggunaan Spotify**
## Nama Anggota Kelompok:
1. Jehian Athaya Tsani Az Zuhry (H1D022006)
2. Brian Cahya Purnama (H1D022009)
3. Dzakwan Irfan Ramdhani (H1D022043)

## Tujuan Analisis:
1. **Preprocessing**: Membersihkan dan mempersiapkan data
2. **PCA**: Reduksi dimensi untuk visualisasi
3. **Clustering**: Mengelompokkan pengguna berdasarkan pola penggunaan
4. **Association Rules**: Menemukan pola genre musik yang sering didengarkan bersamaan

## Metodologi:
- **K-Means Clustering** untuk segmentasi pengguna
- **Principal Component Analysis (PCA)** untuk visualisasi 2D
- **Association Rule Mining** untuk analisis pola genre

```python
# ===== IMPORT LIBRARIES =====
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
from mlxtend.frequent_patterns import apriori, association_rules
from mlxtend.preprocessing import TransactionEncoder
import warnings
warnings.filterwarnings('ignore')

# Konfigurasi visualisasi
plt.rcParams['figure.figsize'] = (12, 8)
plt.rcParams['font.size'] = 10
sns.set_style("whitegrid")

print("✓ Semua library berhasil diimport")
```

output:
```
✓ Semua library berhasil diimport
```

```python
# ===== LOAD DAN PREPROCESSING DATA =====
print("=" * 50)
print("LANGKAH 1: PREPROCESSING DATA")
print("=" * 50)

# Load data
df = pd.read_csv('Spotify_Usage_Data_301.csv')
print(f"Dataset dimuat: {df.shape[0]} pengguna, {df.shape[1]} fitur")

# Tampilkan info dasar
print("\nInfo Dataset:")
print(df.info())
print(f"\nContoh data:\n{df.head()}")

# Handle missing values
print(f"\nMissing values: {df.isnull().sum().sum()}")
if df.isnull().sum().sum() > 0:
    df = df.fillna(df.select_dtypes(include=[np.number]).mean())

# Prepare genre dummies
print("\nMemproses fitur genre...")
genre_dummies = df['Genre_Sering_Didengarkan'].str.get_dummies(sep=', ')
print(f"Ditemukan {genre_dummies.shape[1]} genre unik: {list(genre_dummies.columns)}")

# Prepare numerical features
numerical_features = ['Total_Waktu_Harian_Jam', 'Durasi_Sesi_Rata_rata_Jam',
                     'Frekuensi_Akses_Harian', 'Total_Lagu_Harian']
X_numerical = df[numerical_features].copy()

# Combine features
X_combined = pd.concat([X_numerical, genre_dummies], axis=1)
print(f"Total fitur untuk clustering: {X_combined.shape[1]}")

# Standardization
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_combined)
print("✓ Data berhasil di-standardisasi")
```

output:
```
==================================================
LANGKAH 1: PREPROCESSING DATA
==================================================
Dataset dimuat: 301 pengguna, 5 fitur

Info Dataset:
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 301 entries, 0 to 300
Data columns (total 5 columns):
 #   Column                     Non-Null Count  Dtype  
---  ------                     --------------  -----  
 0   Total_Waktu_Harian_Jam     301 non-null    float64
 1   Durasi_Sesi_Rata_rata_Jam  301 non-null    float64
 2   Frekuensi_Akses_Harian     301 non-null    int64  
 3   Total_Lagu_Harian          301 non-null    int64  
 4   Genre_Sering_Didengarkan   301 non-null    object 
dtypes: float64(2), int64(2), object(1)
memory usage: 11.9+ KB
None

Contoh data:
   Total_Waktu_Harian_Jam  Durasi_Sesi_Rata_rata_Jam  Frekuensi_Akses_Harian  \
0                1.863866                   0.218899                       1   
1                0.627198                   0.457903                       1   
2                1.818369                   0.306988                       1   
3                0.811042                   0.083467                       1   
4                1.590458                   0.050000                       1   

   Total_Lagu_Harian Genre_Sering_Didengarkan  
0                  8         Rock, Electronic  
1                  5   Indie, Country, Reggae  
2                 29                   Reggae  
3                 34     Indie, Reggae, Blues  
4                  6               Electronic  

Missing values: 0

Memproses fitur genre...
Ditemukan 13 genre unik: ['Blues', 'Classical', 'Country', 'Electronic', 'Folk', 'Hip Hop', 'Indie', 'Jazz', 'Metal', 'Pop', 'R&B', 'Reggae', 'Rock']
Total fitur untuk clustering: 17
✓ Data berhasil di-standardisasi
```

```python
# ===== PRINCIPAL COMPONENT ANALYSIS (PCA) =====
print("=" * 50)
print("LANGKAH 2: PRINCIPAL COMPONENT ANALYSIS")
print("=" * 50)

# Apply PCA
pca_2d = PCA(n_components=2)
X_pca_2d = pca_2d.fit_transform(X_scaled)

# Create PCA dataframe
pca_2d_df = pd.DataFrame(data=X_pca_2d, columns=['PC1', 'PC2'])

# Display PCA results
explained_var = pca_2d.explained_variance_ratio_
print(f"Variance explained oleh PC1: {explained_var[0]*100:.2f}%")
print(f"Variance explained oleh PC2: {explained_var[1]*100:.2f}%")
print(f"Total variance explained: {sum(explained_var)*100:.2f}%")

# Visualize PCA
plt.figure(figsize=(10, 6))
plt.scatter(X_pca_2d[:, 0], X_pca_2d[:, 1], alpha=0.6, c='skyblue', edgecolors='navy')
plt.xlabel(f'PC1 ({explained_var[0]*100:.1f}% variance)')
plt.ylabel(f'PC2 ({explained_var[1]*100:.1f}% variance)')
plt.title('Distribusi Data dalam Ruang PCA')
plt.grid(True, alpha=0.3)
plt.show()

print("✓ PCA berhasil diterapkan")
```

output:
```
==================================================
LANGKAH 2: PRINCIPAL COMPONENT ANALYSIS
==================================================
Variance explained oleh PC1: 8.19%
Variance explained oleh PC2: 7.90%
Total variance explained: 16.09%
```
