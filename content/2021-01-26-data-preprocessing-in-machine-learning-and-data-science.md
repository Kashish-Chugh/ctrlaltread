---
date: 2021-01-27
title: "Data preprocessing in Machine Learning and Data Science"
cover: "https://ctrlaltread.tech/static/avatar-085fa52930c207bfb4bb1de51c68c5e9.png"
categories: 
    - Tech
    - Machine Learning
    - Data Science
tags:
    - machine learning
    - data science
    - data preprocessing
    - data mining
---

![Data Preprocessing](https://miro.medium.com/max/1050/0*hVVeK-vWPivDH1wv.jpg)

Data preprocessing is the primary step in Machine Learning process. It is often neglected but it is an important step. Raw data is highly prone to noise, missing data and unreliable data. Data pre-processing includes cleaning, normalization, transformation, feature extraction and selection, etc. The quality of data affects the outcome of the algorithm.

Data preprocessing method includes:

- Data Cleaning
- Data Integration
- Data Transformation
- Data Reduction

---

## Data Cleaning

Data can be incomplete (lacking attribute values), noisy(contains errors or outliers) and inconsistent.

**Missing values:** Data may contain some missing or null values. These missing values can be filled in for the attribute by various methods:

- *Ignore the tuple:* When the class label is missing. This method is not very effective unless tuple contains several attributes with missing values.
- *Fill missing value manually*
- *Use a global constant to fill the missing value:* Replace all the missing values in the attributes with the same constant.
- *Use the attribute mean to fill missing value*

**Noisy Data:** Noise is a random error or outlier in the attribute. Data can be smoothed using the following techniques:

- *Binning methods:* Binning methods smooth a sorted data value by consulting the neighborhood or values around it.
- *Clustering:* Outliers may be detected by clustering, where similar values are organized into groups or clusters.
- *Regression:* Data can be smoothed by fitting the data to a function. The data which are deviated from the function with large values are outliers.
  
---

## Data Integration

Data integration is combining data from multiple sources into a coherent data store. These sources may include multiple databases. There are a few problems while integrating data such as match up in data entities and redundancy.

---

## Data Transformation

Data transformation includes converting data into forms suitable for machine learning algorithms. Data transformation include the following methods:

- _Normalization:_ Scaling the data into a specific range such as 0 to 1.
- _Smoothing:_ Remove the noise using binning, clustering and regression.
- _Aggregation:_ Summary or aggregation operations are applied to the data.
- _Generalization:_ Low-level data are replaced by higher level data.

---

## Data Reduction

The huge amount of data take a very long time in processing and analyzing. We reduce the data without affecting the integrity of the original data. Some data reduction techniques are:

- _Dimension reduction:_ Irrelevant, weakly relevant, or redundant attributes or dimensions may be detected and removed.
- _Data compression:_ Encoding mechanisms are used to reduce the data set size. The methods used for data compression are wavelet transform and Principal Component Analysis.
- _Numerosity reduction:_ The data are replaced or estimated by alternatives such as regression or sampling.
