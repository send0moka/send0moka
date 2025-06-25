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

![](https://jehian.me/distribusi_data_dalam_ruang_pca.png)

```
✓ PCA berhasil diterapkan
```

```python
# ===== MENENTUKAN JUMLAH CLUSTER OPTIMAL =====
print("=" * 50)
print("LANGKAH 3: PENENTUAN JUMLAH CLUSTER OPTIMAL")
print("=" * 50)

k_range = range(2, 8)
inertias = []
silhouette_scores = []

print("Menguji berbagai jumlah cluster...")
for k in k_range:
    kmeans = KMeans(n_clusters=k, random_state=42, n_init=10)
    cluster_labels = kmeans.fit_predict(X_pca_2d)

    inertias.append(kmeans.inertia_)
    sil_score = silhouette_score(X_pca_2d, cluster_labels)
    silhouette_scores.append(sil_score)

    print(f"k={k}: Silhouette Score={sil_score:.3f}")

# Find optimal k
optimal_k = k_range[np.argmax(silhouette_scores)]
print(f"\n✓ Jumlah cluster optimal: {optimal_k} (Silhouette Score tertinggi)")

# Visualize cluster evaluation
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(15, 5))

# Elbow method
ax1.plot(k_range, inertias, 'bo-', linewidth=2, markersize=8)
ax1.set_xlabel('Jumlah Cluster (k)')
ax1.set_ylabel('Inertia')
ax1.set_title('Elbow Method')
ax1.grid(True, alpha=0.3)

# Silhouette score
ax2.plot(k_range, silhouette_scores, 'go-', linewidth=2, markersize=8)
ax2.axvline(x=optimal_k, color='red', linestyle='--', alpha=0.7,
           label=f'Optimal k={optimal_k}')
ax2.set_xlabel('Jumlah Cluster (k)')
ax2.set_ylabel('Silhouette Score')
ax2.set_title('Silhouette Score')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()
```

output:
```
==================================================
LANGKAH 3: PENENTUAN JUMLAH CLUSTER OPTIMAL
==================================================
Menguji berbagai jumlah cluster...
k=2: Silhouette Score=0.342
k=3: Silhouette Score=0.412
k=4: Silhouette Score=0.336
k=5: Silhouette Score=0.329
k=6: Silhouette Score=0.332
k=7: Silhouette Score=0.321

✓ Jumlah cluster optimal: 3 (Silhouette Score tertinggi)
```

![](https://jehian.me/elbow_method_silhouette_score.png)

```python
# ===== FINAL CLUSTERING =====
print("=" * 50)
print("LANGKAH 4: CLUSTERING AKHIR")
print("=" * 50)

# Perform final clustering
final_kmeans = KMeans(n_clusters=optimal_k, random_state=42, n_init=10)
final_clusters = final_kmeans.fit_predict(X_pca_2d)

# Add cluster labels
pca_2d_df['Cluster'] = final_clusters
df_with_clusters = df.copy()
df_with_clusters['Cluster'] = final_clusters

# Display cluster distribution
print("Distribusi Cluster:")
cluster_counts = pd.Series(final_clusters).value_counts().sort_index()
for cluster_id, count in cluster_counts.items():
    print(f"  Cluster {cluster_id}: {count} pengguna ({count/len(df)*100:.1f}%)")

print("✓ Clustering berhasil dilakukan")
```

output:
```
Analisis Pola Penggunaan Spotify
Nama Anggota Kelompok:
Jehian Athaya Tsani Az Zuhry (H1D022006)
Brian Cahya Purnama (H1D022009)
Dzakwan Irfan Ramdhani (H1D022043)
Tujuan Analisis:
Preprocessing: Membersihkan dan mempersiapkan data
PCA: Reduksi dimensi untuk visualisasi
Clustering: Mengelompokkan pengguna berdasarkan pola penggunaan
Association Rules: Menemukan pola genre musik yang sering didengarkan bersamaan
Metodologi:
K-Means Clustering untuk segmentasi pengguna
Principal Component Analysis (PCA) untuk visualisasi 2D
Association Rule Mining untuk analisis pola genre

[ ]
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
✓ Semua library berhasil diimport

[ ]
# ===== LOAD DAN PREPROCESSING DATA =====
print("=" * 50)
print("LANGKAH 1: PREPROCESSING DATA")
print("=" * 50)

# Load data
df = pd.read_csv('Spotify_Usage_Data_301.csv')
print(f"Dataset dimuat: {df.shape[0]} pengguna, {df.shape[1]} fitur")

# Tampilkan info dasar
…X_combined = pd.concat([X_numerical, genre_dummies], axis=1)
print(f"Total fitur untuk clustering: {X_combined.shape[1]}")

# Standardization
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_combined)
print("✓ Data berhasil di-standardisasi")
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

[ ]
# ===== PRINCIPAL COMPONENT ANALYSIS (PCA) =====
print("=" * 50)
print("LANGKAH 2: PRINCIPAL COMPONENT ANALYSIS")
print("=" * 50)

# Apply PCA
pca_2d = PCA(n_components=2)
X_pca_2d = pca_2d.fit_transform(X_scaled)

# Create PCA dataframe
…plt.scatter(X_pca_2d[:, 0], X_pca_2d[:, 1], alpha=0.6, c='skyblue', edgecolors='navy')
plt.xlabel(f'PC1 ({explained_var[0]*100:.1f}% variance)')
plt.ylabel(f'PC2 ({explained_var[1]*100:.1f}% variance)')
plt.title('Distribusi Data dalam Ruang PCA')
plt.grid(True, alpha=0.3)
plt.show()

print("✓ PCA berhasil diterapkan")


[ ]
# ===== MENENTUKAN JUMLAH CLUSTER OPTIMAL =====
print("=" * 50)
print("LANGKAH 3: PENENTUAN JUMLAH CLUSTER OPTIMAL")
print("=" * 50)

k_range = range(2, 8)
inertias = []
silhouette_scores = []

print("Menguji berbagai jumlah cluster...")
…ax2.set_title('Silhouette Score')
ax2.legend()
ax2.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()


[ ]
# ===== FINAL CLUSTERING =====
print("=" * 50)
print("LANGKAH 4: CLUSTERING AKHIR")
print("=" * 50)

# Perform final clustering
final_kmeans = KMeans(n_clusters=optimal_k, random_state=42, n_init=10)
final_clusters = final_kmeans.fit_predict(X_pca_2d)

# Add cluster labels
…print("✓ Clustering berhasil dilakukan")
==================================================
LANGKAH 4: CLUSTERING AKHIR
==================================================
Distribusi Cluster:
  Cluster 0: 82 pengguna (27.2%)
  Cluster 1: 145 pengguna (48.2%)
  Cluster 2: 74 pengguna (24.6%)
✓ Clustering berhasil dilakukan
```

```python
# ===== VISUALISASI HASIL CLUSTERING =====
print("=" * 50)
print("LANGKAH 5: VISUALISASI HASIL CLUSTERING")
print("=" * 50)

plt.figure(figsize=(16, 12))

# Plot 1: Clusters on PCA space
plt.subplot(2, 3, 1)
colors = plt.cm.Set1(np.linspace(0, 1, optimal_k))
for i in range(optimal_k):
    cluster_points = pca_2d_df[pca_2d_df['Cluster'] == i]
    plt.scatter(cluster_points['PC1'], cluster_points['PC2'],
               c=[colors[i]], label=f'Cluster {i}', alpha=0.7, s=60)

centroids_pca = final_kmeans.cluster_centers_
plt.scatter(centroids_pca[:, 0], centroids_pca[:, 1],
           c='black', marker='x', s=200, linewidths=3, label='Centroid')
plt.xlabel(f'PC1 ({explained_var[0]*100:.1f}% variance)')
plt.ylabel(f'PC2 ({explained_var[1]*100:.1f}% variance)')
plt.title('Hasil K-Means Clustering')
plt.legend()
plt.grid(True, alpha=0.3)

# Plot 2-6: Karakteristik cluster
metrics = [
    ('Total_Waktu_Harian_Jam', 'Waktu Mendengarkan Harian (Jam)', 'h'),
    ('Durasi_Sesi_Rata_rata_Jam', 'Durasi Sesi Rata-rata (Jam)', 'h'),
    ('Total_Lagu_Harian', 'Jumlah Lagu Harian', ''),
    ('Frekuensi_Akses_Harian', 'Frekuensi Akses Harian', 'x'),
    (None, 'Ukuran Cluster', 'pengguna')
]

for idx, (col, title, unit) in enumerate(metrics, 2):
    plt.subplot(2, 3, idx)

    if col is None:  # Cluster sizes
        cluster_sizes = [np.sum(final_clusters == i) for i in range(optimal_k)]
        values = cluster_sizes
    else:
        values = df_with_clusters.groupby('Cluster')[col].mean().values

    bars = plt.bar(range(optimal_k), values, color=colors)
    plt.xlabel('Cluster')
    plt.ylabel(title)
    plt.title(title)
    plt.xticks(range(optimal_k))

    # Add value labels on bars
    for i, bar in enumerate(bars):
        height = bar.get_height()
        plt.text(bar.get_x() + bar.get_width()/2, height + height*0.01,
                f'{values[i]:.1f}{unit}', ha='center', va='bottom')
    plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()

print("✓ Visualisasi clustering selesai")
```

output:
```
==================================================
LANGKAH 5: VISUALISASI HASIL CLUSTERING
==================================================
```

![](https://jehian.me/hasil_kmeans_clustering_waktu_mendengarkan_harian_durasi_sesi_rerata_jumlah_lagu_harian_frekuensi_akses_harian_ukuran_cluster.png)

```
✓ Visualisasi clustering selesai
```

```python
# ===== PROFIL DETAIL SETIAP CLUSTER =====
print("=" * 50)
print("LANGKAH 6: ANALISIS PROFIL CLUSTER")
print("=" * 50)

def analyze_genres_in_cluster(cluster_df):
    """Analisis preferensi genre dalam cluster"""
    genres_list = []
    for genres_str in cluster_df['Genre_Sering_Didengarkan']:
        genres = [g.strip() for g in genres_str.split(',')]
        genres_list.extend(genres)
    return pd.Series(genres_list).value_counts()

cluster_profiles = {}
summary_data = []

for cluster_id in range(optimal_k):
    cluster_data = df_with_clusters[df_with_clusters['Cluster'] == cluster_id]

    print(f"\n--- PROFIL CLUSTER {cluster_id} ---")
    print(f"Jumlah pengguna: {len(cluster_data)} ({len(cluster_data)/len(df)*100:.1f}%)")

    # Statistik dasar
    stats = {
        'waktu_harian': cluster_data['Total_Waktu_Harian_Jam'].mean(),
        'durasi_sesi': cluster_data['Durasi_Sesi_Rata_rata_Jam'].mean(),
        'lagu_harian': cluster_data['Total_Lagu_Harian'].mean(),
        'frekuensi_akses': cluster_data['Frekuensi_Akses_Harian'].mean()
    }

    print(f"Rata-rata waktu mendengarkan harian: {stats['waktu_harian']:.2f} jam")
    print(f"Rata-rata durasi sesi: {stats['durasi_sesi']:.2f} jam")
    print(f"Rata-rata lagu harian: {stats['lagu_harian']:.1f} lagu")
    print(f"Rata-rata frekuensi akses: {stats['frekuensi_akses']:.1f} kali/hari")

    # Analisis genre
    genre_counts = analyze_genres_in_cluster(cluster_data)
    print(f"Top 3 genre favorit:")
    for genre, count in genre_counts.head(3).items():
        percentage = (count / len(cluster_data)) * 100
        print(f"  {genre}: {count} pengguna ({percentage:.1f}%)")

    # Label cluster berdasarkan karakteristik
    if stats['waktu_harian'] > 2:
        intensity = "Heavy"
    elif stats['waktu_harian'] > 1:
        intensity = "Moderate"
    else:
        intensity = "Light"

    top_genre = genre_counts.index[0] if len(genre_counts) > 0 else 'Mixed'
    cluster_label = f"{intensity} {top_genre} Listeners"

    print(f"Label Cluster: {cluster_label}")

    # Store untuk summary
    cluster_profiles[cluster_id] = {
        'size': len(cluster_data),
        'stats': stats,
        'top_genres': genre_counts.head(3).to_dict(),
        'label': cluster_label
    }

    summary_data.append({
        'Cluster': cluster_id,
        'Label': cluster_label,
        'Jumlah_Pengguna': len(cluster_data),
        'Persentase': f"{len(cluster_data)/len(df)*100:.1f}%",
        'Waktu_Harian_Avg': f"{stats['waktu_harian']:.2f}",
        'Genre_Favorit': top_genre
    })

# Summary table
print(f"\n--- RINGKASAN SEMUA CLUSTER ---")
summary_df = pd.DataFrame(summary_data)
print(summary_df.to_string(index=False))

print("✓ Profiling cluster selesai")
```

output:
```
==================================================
LANGKAH 6: ANALISIS PROFIL CLUSTER
==================================================

--- PROFIL CLUSTER 0 ---
Jumlah pengguna: 82 (27.2%)
Rata-rata waktu mendengarkan harian: 1.34 jam
Rata-rata durasi sesi: 0.24 jam
Rata-rata lagu harian: 16.4 lagu
Rata-rata frekuensi akses: 2.0 kali/hari
Top 3 genre favorit:
  Country: 38 pengguna (46.3%)
  Indie: 30 pengguna (36.6%)
  Electronic: 21 pengguna (25.6%)
Label Cluster: Moderate Country Listeners

--- PROFIL CLUSTER 1 ---
Jumlah pengguna: 145 (48.2%)
Rata-rata waktu mendengarkan harian: 0.92 jam
Rata-rata durasi sesi: 0.32 jam
Rata-rata lagu harian: 19.4 lagu
Rata-rata frekuensi akses: 1.3 kali/hari
Top 3 genre favorit:
  Folk: 42 pengguna (29.0%)
  R&B: 42 pengguna (29.0%)
  Hip Hop: 37 pengguna (25.5%)
Label Cluster: Light Folk Listeners

--- PROFIL CLUSTER 2 ---
Jumlah pengguna: 74 (24.6%)
Rata-rata waktu mendengarkan harian: 0.95 jam
Rata-rata durasi sesi: 0.38 jam
Rata-rata lagu harian: 22.8 lagu
Rata-rata frekuensi akses: 1.3 kali/hari
Top 3 genre favorit:
  Reggae: 44 pengguna (59.5%)
  Classical: 27 pengguna (36.5%)
  Rock: 17 pengguna (23.0%)
Label Cluster: Light Reggae Listeners

--- RINGKASAN SEMUA CLUSTER ---
 Cluster                      Label  Jumlah_Pengguna Persentase Waktu_Harian_Avg Genre_Favorit
       0 Moderate Country Listeners               82      27.2%             1.34       Country
       1       Light Folk Listeners              145      48.2%             0.92          Folk
       2     Light Reggae Listeners               74      24.6%             0.95        Reggae
✓ Profiling cluster selesai
```

```python
# ===== ASSOCIATION RULE MINING =====
print("=" * 50)
print("LANGKAH 7: ASSOCIATION RULE MINING")
print("=" * 50)

def prepare_genre_transactions(cluster_df):
    """Convert genre strings ke format transaksi"""
    transactions = []
    for genres_str in cluster_df['Genre_Sering_Didengarkan']:
        genres = [genre.strip() for genre in genres_str.split(',')]
        transactions.append(genres)
    return transactions

def mine_association_rules(df_encoded, min_support=0.1, min_confidence=0.2):
    """Mining association rules"""
    try:
        frequent_itemsets = apriori(df_encoded, min_support=min_support, use_colnames=True)
        if len(frequent_itemsets) == 0:
            return pd.DataFrame()

        rules = association_rules(frequent_itemsets, metric="confidence", min_threshold=min_confidence)
        return rules.sort_values('confidence', ascending=False) if len(rules) > 0 else pd.DataFrame()
    except:
        return pd.DataFrame()

def format_itemset(itemset):
    """Format itemset untuk display"""
    return ", ".join(sorted(list(itemset))) if isinstance(itemset, frozenset) else str(itemset)

cluster_association_rules = {}
association_summary = []

print("Melakukan Association Rule Mining untuk setiap cluster...")

for cluster_id in range(optimal_k):
    cluster_data = df_with_clusters[df_with_clusters['Cluster'] == cluster_id]
    print(f"\nCluster {cluster_id} ({len(cluster_data)} pengguna):")

    if len(cluster_data) < 5:
        print("  Data tidak cukup untuk association rule mining")
        cluster_association_rules[cluster_id] = pd.DataFrame()
        continue

    # Prepare transactions
    transactions = prepare_genre_transactions(cluster_data)

    # Create one-hot encoded matrix
    te = TransactionEncoder()
    te_ary = te.fit(transactions).transform(transactions)
    df_encoded = pd.DataFrame(te_ary, columns=te.columns_)

    if len(df_encoded.columns) < 2:
        print("  Genre tidak cukup beragam untuk association rules")
        cluster_association_rules[cluster_id] = pd.DataFrame()
        continue

    # Adjust min_support based on cluster size
    min_support = max(0.05, 2/len(cluster_data))

    # Mine rules
    rules = mine_association_rules(df_encoded, min_support=min_support, min_confidence=0.2)
    cluster_association_rules[cluster_id] = rules

    if len(rules) == 0:
        print("  Tidak ditemukan association rules yang signifikan")
        association_summary.append({
            'Cluster': cluster_id,
            'Jumlah_Rules': 0,
            'Top_Rule': 'Tidak ada',
            'Confidence': 'N/A'
        })
    else:
        print(f"  Ditemukan {len(rules)} association rules")

        # Show top 3 rules
        print("  Top 3 aturan paling signifikan:")
        for idx, rule in rules.head(3).iterrows():
            antecedents = format_itemset(rule['antecedents'])
            consequents = format_itemset(rule['consequents'])
            print(f"    {antecedents} → {consequents}")
            print(f"      Support: {rule['support']:.3f}, Confidence: {rule['confidence']:.3f}")

        # Add to summary
        top_rule = rules.iloc[0]
        top_rule_str = f"{format_itemset(top_rule['antecedents'])} → {format_itemset(top_rule['consequents'])}"
        association_summary.append({
            'Cluster': cluster_id,
            'Jumlah_Rules': len(rules),
            'Top_Rule': top_rule_str[:40] + "..." if len(top_rule_str) > 40 else top_rule_str,
            'Confidence': f"{top_rule['confidence']:.3f}"
        })

# Display association rules summary
print(f"\n--- RINGKASAN ASSOCIATION RULES ---")
assoc_summary_df = pd.DataFrame(association_summary)
print(assoc_summary_df.to_string(index=False))

print("✓ Association rule mining selesai")
```

output:
```
==================================================
LANGKAH 7: ASSOCIATION RULE MINING
==================================================
Melakukan Association Rule Mining untuk setiap cluster...

Cluster 0 (82 pengguna):
  Ditemukan 13 association rules
  Top 3 aturan paling signifikan:
    Classical → Country
      Support: 0.098, Confidence: 0.727
    Metal → Country
      Support: 0.085, Confidence: 0.583
    R&B → Country
      Support: 0.061, Confidence: 0.556

Cluster 1 (145 pengguna):
  Ditemukan 4 association rules
  Top 3 aturan paling signifikan:
    Metal → Folk
      Support: 0.062, Confidence: 0.265
    Metal → R&B
      Support: 0.055, Confidence: 0.235
    Hip Hop → Folk
      Support: 0.055, Confidence: 0.216

Cluster 2 (74 pengguna):
  Ditemukan 16 association rules
  Top 3 aturan paling signifikan:
    Metal → Reggae
      Support: 0.054, Confidence: 1.000
    Indie → Reggae
      Support: 0.108, Confidence: 0.889
    Jazz → Pop
      Support: 0.054, Confidence: 0.571

--- RINGKASAN ASSOCIATION RULES ---
 Cluster  Jumlah_Rules            Top_Rule Confidence
       0            13 Classical → Country      0.727
       1             4        Metal → Folk      0.265
       2            16      Metal → Reggae      1.000
✓ Association rule mining selesai
```

```python
# ===== VISUALISASI ASSOCIATION RULES =====
print("=" * 50)
print("VISUALISASI ASSOCIATION RULES")
print("=" * 50)

# Count rules per cluster
rules_counts = [len(cluster_association_rules[i]) for i in range(optimal_k)]

# Collect top rules dari semua cluster untuk bar chart individual
top_rules_data = []
for cluster_id in range(optimal_k):
    rules = cluster_association_rules[cluster_id]
    if len(rules) > 0:
        # Ambil top 2 rules per cluster
        for idx, rule in rules.head(2).iterrows():
            antecedents = format_itemset(rule['antecedents'])
            consequents = format_itemset(rule['consequents'])
            rule_name = f"C{cluster_id}: {antecedents} → {consequents}"
            # Batasi panjang nama rule untuk visualisasi
            if len(rule_name) > 25:
                rule_name = rule_name[:22] + "..."

            top_rules_data.append({
                'rule': rule_name,
                'cluster': cluster_id,
                'support': rule['support'],
                'confidence': rule['confidence'],
                'lift': rule['lift']
            })

# Convert to DataFrame dan sort by confidence
top_rules_df = pd.DataFrame(top_rules_data)
if len(top_rules_df) > 0:
    top_rules_df = top_rules_df.sort_values('confidence', ascending=False).head(10)

# Create figure with subplots
fig = plt.figure(figsize=(20, 15))

# Plot 1: Number of rules per cluster
ax1 = plt.subplot(2, 3, 1)
colors = plt.cm.Set1(np.linspace(0, 1, optimal_k))
bars1 = ax1.bar(range(optimal_k), rules_counts, color=colors[:optimal_k])
ax1.set_xlabel('Cluster')
ax1.set_ylabel('Jumlah Association Rules')
ax1.set_title('Jumlah Association Rules per Cluster')
ax1.set_xticks(range(optimal_k))
for i, count in enumerate(rules_counts):
    ax1.text(i, count + 0.1, str(count), ha='center', va='bottom')
ax1.grid(True, alpha=0.3)

# Plot 2: Average confidence per cluster
ax2 = plt.subplot(2, 3, 2)
avg_confidences = []
for cluster_id in range(optimal_k):
    rules = cluster_association_rules[cluster_id]
    avg_confidences.append(rules['confidence'].mean() if len(rules) > 0 else 0)

bars2 = ax2.bar(range(optimal_k), avg_confidences, color=colors[:optimal_k])
ax2.set_xlabel('Cluster')
ax2.set_ylabel('Rata-rata Confidence')
ax2.set_title('Rata-rata Confidence Rules per Cluster')
ax2.set_xticks(range(optimal_k))
for i, conf in enumerate(avg_confidences):
    if conf > 0:
        ax2.text(i, conf + 0.01, f'{conf:.2f}', ha='center', va='bottom')
ax2.grid(True, alpha=0.3)

# Plot 3: Cluster size vs rules found
ax3 = plt.subplot(2, 3, 3)
cluster_sizes = [len(df_with_clusters[df_with_clusters['Cluster'] == i]) for i in range(optimal_k)]
ax3.scatter(cluster_sizes, rules_counts, c=colors[:optimal_k], s=100, alpha=0.7)
ax3.set_xlabel('Ukuran Cluster')
ax3.set_ylabel('Jumlah Association Rules')
ax3.set_title('Ukuran Cluster vs Association Rules')
for i, (size, rules_count) in enumerate(zip(cluster_sizes, rules_counts)):
    ax3.annotate(f'C{i}', (size, rules_count), xytext=(5, 5), textcoords='offset points')
ax3.grid(True, alpha=0.3)

# Plot 4: Distribution of genres across clusters
ax4 = plt.subplot(2, 3, 4)
all_genres = set()
for cluster_id in range(optimal_k):
    cluster_data = df_with_clusters[df_with_clusters['Cluster'] == cluster_id]
    for genres_str in cluster_data['Genre_Sering_Didengarkan']:
        genres = [g.strip() for g in genres_str.split(',')]
        all_genres.update(genres)

top_genres = list(all_genres)[:6]  # Top 6 genres for visualization
genre_cluster_matrix = np.zeros((len(top_genres), optimal_k))

for j, cluster_id in enumerate(range(optimal_k)):
    cluster_data = df_with_clusters[df_with_clusters['Cluster'] == cluster_id]
    for i, genre in enumerate(top_genres):
        count = sum(genre in genres_str for genres_str in cluster_data['Genre_Sering_Didengarkan'])
        genre_cluster_matrix[i, j] = count / len(cluster_data) * 100

im = ax4.imshow(genre_cluster_matrix, aspect='auto', cmap='YlOrRd')
ax4.set_xticks(range(optimal_k))
ax4.set_xticklabels([f'C{i}' for i in range(optimal_k)])
ax4.set_yticks(range(len(top_genres)))
ax4.set_yticklabels(top_genres)
ax4.set_title('Distribusi Genre per Cluster (%)')
plt.colorbar(im, ax=ax4)

# ===== Bar chart Support dari Top Association Rules =====
ax5 = plt.subplot(2, 3, 5)
if len(top_rules_df) > 0:
    # Bar chart support
    rule_colors = [colors[cluster] for cluster in top_rules_df['cluster']]
    bars5 = ax5.barh(range(len(top_rules_df)), top_rules_df['support'], color=rule_colors, alpha=0.7)
    ax5.set_yticks(range(len(top_rules_df)))
    ax5.set_yticklabels(top_rules_df['rule'], fontsize=8)
    ax5.set_xlabel('Support')
    ax5.set_title('Support dari Top Association Rules')
    ax5.grid(True, alpha=0.3, axis='x')

    # Add value labels
    for i, (support, cluster) in enumerate(zip(top_rules_df['support'], top_rules_df['cluster'])):
        ax5.text(support + 0.005, i, f'{support:.3f}', va='center', fontsize=8)
else:
    ax5.text(0.5, 0.5, 'Tidak ada association rules\nyang ditemukan',
             ha='center', va='center', transform=ax5.transAxes, fontsize=12)
    ax5.set_title('Support dari Top Association Rules')

# ===== Bar chart Confidence dari Top Association Rules =====
ax6 = plt.subplot(2, 3, 6)
if len(top_rules_df) > 0:
    # Bar chart confidence
    bars6 = ax6.barh(range(len(top_rules_df)), top_rules_df['confidence'], color=rule_colors, alpha=0.7)
    ax6.set_yticks(range(len(top_rules_df)))
    ax6.set_yticklabels(top_rules_df['rule'], fontsize=8)
    ax6.set_xlabel('Confidence')
    ax6.set_title('Confidence dari Top Association Rules')
    ax6.grid(True, alpha=0.3, axis='x')

    # Add value labels
    for i, (confidence, cluster) in enumerate(zip(top_rules_df['confidence'], top_rules_df['cluster'])):
        ax6.text(confidence + 0.005, i, f'{confidence:.3f}', va='center', fontsize=8)
else:
    ax6.text(0.5, 0.5, 'Tidak ada association rules\nyang ditemukan',
             ha='center', va='center', transform=ax6.transAxes, fontsize=12)
    ax6.set_title('Confidence dari Top Association Rules')

plt.tight_layout()
plt.show()

# Tabel detail top association rules
if len(top_rules_df) > 0:
    print(f"\n--- TOP 6 ASSOCIATION RULES ---")
    display_df = top_rules_df.copy()
    display_df['support'] = display_df['support'].apply(lambda x: f"{x:.3f}")
    display_df['confidence'] = display_df['confidence'].apply(lambda x: f"{x:.3f}")
    display_df['lift'] = display_df['lift'].apply(lambda x: f"{x:.3f}")
    display_df = display_df.rename(columns={
        'rule': 'Association Rule',
        'cluster': 'Cluster',
        'support': 'Support',
        'confidence': 'Confidence',
        'lift': 'Lift'
    })
    print(display_df.to_string(index=False))
else:
    print("\nTidak ada association rules yang signifikan ditemukan.")

print("✓ Visualisasi association rules dengan bar chart support/confidence selesai")
```

output:
```
==================================================
VISUALISASI ASSOCIATION RULES
==================================================
```

![](https://jehian.me/jumlah_association_rules_percluster_rerate_confidence_rules_percluster_ukuran_cluster_vs_association_rules_distribusi_genre_percluster_support_dari_top_association_rules_confidence_dari_top_association_rules.png)

```
--- TOP 6 ASSOCIATION RULES ---
       Association Rule  Cluster Support Confidence  Lift
     C2: Metal → Reggae        2   0.054      1.000 1.682
     C2: Indie → Reggae        2   0.108      0.889 1.495
C0: Classical → Country        0   0.098      0.727 1.569
    C0: Metal → Country        0   0.085      0.583 1.259
       C1: Metal → Folk        1   0.062      0.265 0.914
        C1: Metal → R&B        1   0.055      0.235 0.812
✓ Visualisasi association rules dengan bar chart support/confidence selesai
```

```python
# ===== KESIMPULAN AKHIR =====
print("=" * 60)
print("KESIMPULAN AKHIR ANALISIS")
print("=" * 60)

print(f"HASIL CLUSTERING:")
print(f"• Jumlah cluster optimal: {optimal_k}")
print(f"• Total pengguna yang dianalisis: {len(df)}")
print(f"• Variance yang dijelaskan oleh PCA: {sum(explained_var)*100:.1f}%")

print(f"\nDISTRIBUSI PENGGUNA:")
for cluster_id in range(optimal_k):
    profile = cluster_profiles[cluster_id]
    print(f"• Cluster {cluster_id} ({profile['label']}): {profile['size']} pengguna ({profile['size']/len(df)*100:.1f}%)")

print(f"\nASSOCIATION RULES:")
total_rules = sum(len(cluster_association_rules[i]) for i in range(optimal_k))
clusters_with_rules = sum(1 for i in range(optimal_k) if len(cluster_association_rules[i]) > 0)
print(f"• Total association rules ditemukan: {total_rules}")
print(f"• Cluster dengan rules signifikan: {clusters_with_rules} dari {optimal_k}")

print(f"\n✓ ANALISIS SELESAI")
print("=" * 60)
```

output:
```
============================================================
KESIMPULAN AKHIR ANALISIS
============================================================
HASIL CLUSTERING:
• Jumlah cluster optimal: 3
• Total pengguna yang dianalisis: 301
• Variance yang dijelaskan oleh PCA: 16.1%

DISTRIBUSI PENGGUNA:
• Cluster 0 (Moderate Country Listeners): 82 pengguna (27.2%)
• Cluster 1 (Light Folk Listeners): 145 pengguna (48.2%)
• Cluster 2 (Light Reggae Listeners): 74 pengguna (24.6%)

ASSOCIATION RULES:
• Total association rules ditemukan: 33
• Cluster dengan rules signifikan: 3 dari 3

✓ ANALISIS SELESAI
============================================================
```